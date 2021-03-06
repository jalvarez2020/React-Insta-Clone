import React from 'react';
import CommentFooter from './../CommentSection/CommentFooter';
import './post.css';


class PostContent extends React.Component {


    componentDidMount(){
        console.log("Post Content did mount")
        console.log(this.props)
    }

    render() {

        return (
            <div key={this.props.timestamp}>
                {this.props.dummyData.map(postProps => {
                    return (
                        <div>
                            <div className={"postHeader"}>
                            <img className={"profileThumbImg"} src={postProps.thumbnailUrl} alt={"profile pic"}/>
                            <h4>{postProps.username}</h4>
                            </div>
                            <div className={"contentImgWrap"}>
                            <img className={"imgContent"} src={postProps.imageUrl} alt={"instagramImg"} />
                            </div>
                            <div className="likes">
                                <div className="comIconWrap">
                                <i className= "far fa-heart" > </i>
                                < i className= "far fa-comment" > </i>
                                </div>
                                <h3>{postProps.likes}{" likes"}</h3>
                            </div>
                            <div>
                            {
                             <div> {
                                    postProps.comments.map((newData) => {
                                        return (
                                            <div className={"commentWrap"}>
                                                <h4>{newData.username}</h4>
                                                <p className={"comment"}>{newData.text}</p>
                                            </div>
                                        )
                                    })
                              }</div> //end comments 
                            }
                    <div>
                    <CommentFooter
                    subComment={this.props.subComment}
                    dummyData={this.props.dummyData}
                    commentHandler={this.props.commentHandler}
                    comments={this.props.comments} />
                    </div>
                        </div> 
                    </div> //end comments wrap
                    )
                })}
            </div>
        )
    }
}


export default PostContent;