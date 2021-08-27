import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";






class TestScroll extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            users: [],
            isLoading: false,
            isError: false,
            items: Array.from({ length: 5}),
            hasMore: true,

        };
    }

    componentDidMount() {
       /* let indexStart = 0;
        let indexEnd = 5;
        let url = `https://localhost:8080//posts?_start=${indexStart}&_end=${indexEnd}`*/
        fetch('http://localhost:3000/data/?_start=0&_end=5')
            .then(response => {
                if (response.ok) {
                    console.log(this.state.users);
                    return response.json();
                } else {
                    this.setState({ isError: true, isLoading: false });
                }
            })
            .then(data => {
                this.setState({ users:data, isLoading: false });
               /* console.log(this.state.users[1].id);*/
            })

    }




    fetchMoreData = () => {

        /*if (this.state.items.length >= this.state.users.length) {
            this.setState({ hasMore: false });
            return;
        }*/
        fetch('http://localhost:3000/data/?_start=5&_end=10')
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    this.setState({ isError: true, isLoading: false });
                }
            })
            .then(data => {
                this.setState({ users:data, isLoading: false });

                /*console.log(this.state.users[1].id);*/
            })

        console.log(this.state.users);
        setTimeout(() => {

            this.setState({

                items: this.state.items.concat(Array.from({ length: 5 }))


            });
        }, 1000);
    };

    render() {




        return (




            <div className="bg-light">


                <h1>demo: react-infinite-scroll-component</h1>
                <hr />
                <InfiniteScroll
                    dataLength={this.state.items.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.hasMore}
                    loader={<h4>Loading...</h4>}
                    endMessage={
                        <p style={{ textAlign: "center" }}>
                            <b>Yay! You have seen it all</b>
                        </p>
                    }
                >
                    {this.state.items.map((i,index) => (

                        <div className="grey-box" key = {index}>
                            <div className="row">
                                <div className="col-md-2 fw-bold">Админ:</div>
                                <div className="col-md-2"> {index} </div>
                                <div className="col-md-8">
                                    <button type="submit" className="btn btn-trash float-end">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            fill="currentColor"
                                            className="bi bi-trash"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                            <path
                                                fillRule="evenodd"
                                                d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                                            />
                                        </svg>
                                    </button>
                                    <button type="submit" className="btn btn-edit float-end">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            fill="currentColor"
                                            className="bi bi-pencil-square"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                            <path
                                                fillRule="evenodd"
                                                d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className="row my-2">
                                <div className="col-md-2 fw-bold">Курс:</div>
                                <div className="col-md-2 ">Flutter</div>
                            </div>
                            <div className="row my-2">
                                <div className="col-md-2 fw-bold">Номер телефона:</div>
                                <div className="col-md-2">2</div>
                                <div className="col-md-2 fw-bold">Логин:</div>
                                <div className="col-md-3">3</div>
                            </div>
                            <div className="row my-2">
                                <div className="col-md-2 fw-bold">Пин код:</div>
                                <div className="col-md-2">{this.state.users.id}</div>
                            </div>
                        </div>
                    ))}
                </InfiniteScroll>
            </div>
        );
    }




}



export default TestScroll;
