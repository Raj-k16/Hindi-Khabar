import React from 'react'

export default function NewsItem(props){
    
        return (
            <div className='col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12'>
                <div className="card mb-3" >
                    <img src={props.pic} height="100px" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{props.title.slice(0,30)+"..."}</h5>
                            <h6 className='card-source'>{props.source} - {`${new Date(props.date).getDate()}/${new Date(props.date).getMonth()}/${new Date(props.date).getFullYear()}`}</h6>
                            <hr />
                            <p className="card-text">{props.description.slice(0,80)+"..."}</p>
                            <a href={props.url} className="btn background text-light w-100 btn-sm">Read Full Article</a>
                        </div>
                </div>
            </div>
        )
    
}
