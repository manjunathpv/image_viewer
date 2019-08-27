import React, { Component } from 'react';
import Header from '../../common/header/Header';
import "./Home.css";

import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';


const styles = theme => ({
    avatar: {
        margin: 10,
    },

});

class Home extends Component {

    constructor() {
        super();
        this.state = {
            imagePosts: [],
            postLiked: false
        }
    }

    componentWillMount() {
        let data = null;
        let xhr = new XMLHttpRequest();
        let that = this;
        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                that.setState({ imagePosts: JSON.parse(this.responseText).data });
            }
        })
        xhr.open("GET", this.props.baseUrl + "media/recent?access_token=" + this.props.accessToken);
        // xhr.setRequestHeader("Cache-Control", "no-cache");
        xhr.send(data);
    }

    likeiconClickHandler = (event, typeOfIcon) => {
        this.setState({ postLiked: !this.state.postLiked });

        for (const poster of this.state.imagePosts) {
            if (event.currentTarget.id === poster.id) {
                if (typeOfIcon === 'unlike')
                    ++poster.likes.count;
                else
                    --poster.likes.count;
            }
        }
    }

    render() {
        const classes = this.props;
        return (
            <div>
                <Header showSearchProfileIcon="true" />
                <div className="grid-container">
                    <Grid container spacing={3}>
                        {this.state.imagePosts.map(imgPost => (
                            <Grid item xs={6} key={imgPost.id}>
                                <Card className={classes.card}>
                                    <CardHeader>
                                        <Avatar src={imgPost.user.profile_picture}></Avatar>
                                        <div>
                                            <Typography component="div">
                                                <Box fontWeight="fontWeightBold" m={1}>{imgPost.user.username}</Box>
                                            </Typography>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <img className="image-poster" src={imgPost.images.low_resolution.url} alt="Abhishek" />
                                        <hr />
                                        <Typography >
                                            <Box fontWeight="fontWeightRegular" m={1}>{imgPost.caption.text.substr(0, imgPost.caption.text.indexOf('\n'))}</Box>
                                            <Box className="blue" fontWeight="fontWeightRegular" m={1}>{'#' + imgPost.tags.join(' #')}</Box>
                                        </Typography>
                                        <div className="like-container">
                                            {this.state.postLiked === true ?
                                                <FavoriteIcon className='red' id={imgPost.id} onClick={(event) => this.likeiconClickHandler(event, 'like')} /> :
                                                <FavoriteBorderIcon id={imgPost.id} onClick={(event) => this.likeiconClickHandler(event, 'unlike')} />}
                                            <Typography className="ml20">
                                                <span>{imgPost.likes.count}</span>
                                                <span> Likes </span>
                                            </Typography>

                                        </div>

                                    </CardContent>
                                </Card>
                            </Grid>

                        ))}
                    </Grid>

                </div>

            </div>
        )
    }
}

export default withStyles(styles)(Home);