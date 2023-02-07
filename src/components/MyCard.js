import React, { Component } from 'react'
export class MyCard extends Component {
    render() {
        let { title, description, image, date, author } = this.props;
        return (
            <>
                <div className="col-md-4 col-sm-12" id='myCard'>
                    <div className="originalCard">
                        <img src={image ? image : 'https://thumbs.dreamstime.com/b/sample-stamp-white-background-sign-90532936.jpg'} alt="imgtxt"></img>
                        <h2>{title ? title.slice(0, 40) : "Sample title for kingNewz"}.....</h2>
                        <div id="paragraph">
                            <p>{description ? description.slice(0, 180) : 'Sorry unable to fetch description from News api because No description is available for this news or this news has been deleted please refresh this page for more info '}.....</p>
                            <p id="readMore"><a href="/">Read More...</a></p>
                        </div>
                        <p className="card-text" id="userInfoDiv"><small className="text-muted" id='userInfo'>Last updated on {date ? date : "XX-XX-XXXX"} by {author ? author : "unknown"}</small></p>
                    </div>

                </div>
            </>
        );
    }
}
export default MyCard;