import React from 'react'
import InfiniteScroll from "react-infinite-scroll-component";




let indexStart = 0;
let indexEnd = 5;
let url = `http://localhost:3000/data/?_start=${indexStart}&_end=${indexEnd}`;

class TestV2 extends React.Component{




    constructor(props) {
        super(props);
        this.state = {
            users: [],
            isLoading: false,
            isError: false,
            hasMore: true,
            items: []

        };
    }

    fetchMoreData = () => {

        /*if (this.state.items.length >= this.state.users.length) {
            this.setState({ hasMore: false });
            return;
        }*/

        console.log(this.state.items);
        console.log(this.state.users);
        indexStart+=5;
        indexEnd+=5;
        console.log(indexStart);
        console.log(indexEnd);
        console.log(`http://localhost:3000/data/?_start=${indexStart}&_end=${indexEnd}`)
        console.log(this.state.items.length)

        if(this.state.items.length !== indexStart){
            console.log("HERE WE GO!");
            this.setState({hasMore:false});
        }

        fetch(`http://localhost:3000/data/?_start=${indexStart}&_end=${indexEnd}`)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    this.setState({ isError: true, isLoading: false });
                }
            })
            .then(data => {
                if(data.length < 5){
                    console.log("HERE WE GO!");
                    this.setState({hasMore:false});
                }
                console.log(data.length);
                this.setState({ users:data, isLoading: false });

                /*console.log(this.state.users[1].id);*/
            })

        setTimeout(() => {

            this.setState({

                items: this.state.items.concat(Array.from(this.state.users)),


            });
        }, 1000);
    };

    componentDidMount() {

        fetch(url)
            .then(response => {
                if (response.ok) {

                    return response.json();
                } else {
                    this.setState({ isError: true, isLoading: false });
                }
            })
            .then(data => {
                this.setState({ users:data, isLoading: false });
                this.setState({

                    items: this.state.items.concat(Array.from(this.state.users)),


                });
                 /*console.log(this.state.users[4].name);*/
            })

    }



    render() {

        const { isLoading, isError } = this.state;

        if (isLoading) {
            return <div>Загрузка...</div>;
        }

        if (isError) {
            return <div>Ошибка</div>;
        }
        else {




            return (

                <div>
                    <InfiniteScroll
                        dataLength={this.state.items.length}
                        next={this.fetchMoreData}
                        hasMore={this.state.hasMore}
                        loader={<h4>Загрузка...</h4>}
                        endMessage={
                            <p style={{ textAlign: "center" }}>
                                <b>Все!</b>
                            </p>
                        }
                    >
                        {

                            this.state.items.map((user, indexU) => {

                                return (

                                    <div className="grey-box" key = {indexU}>
                                        <div className="row">
                                            <div className="col-md-2 fw-bold">Админ:</div>
                                            <div className="col-md-2">{user.name}</div>
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
                                            <div className="col-md-2">{user.phone}</div>
                                            <div className="col-md-2 fw-bold">Логин:</div>
                                            <div className="col-md-3">{user.phone}</div>
                                        </div>
                                        <div className="row my-2">
                                            <div className="col-md-2 fw-bold">Пин код:</div>
                                            <div className="col-md-2">{user.pin}</div>
                                        </div>
                                    </div>
                                );
                            }
                        )}
                    </InfiniteScroll>
                </div>
            );
        }
    }
}



export default TestV2;