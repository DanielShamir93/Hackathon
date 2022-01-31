import axios from "axios";
import React from "react";
import "./youtube.css";
const KEY = "AIzaSyApfEJizBV1MmMpqHfTZiGKrQkvCF1UFAo";
const baseURL = "https://www.googleapis.com/youtube/v3/search";

class Youtube extends React.Component {
  state = {
    videoId: null,
  };

  async searchByKeyword(keyword) {
    try {
      const res = await axios.get(baseURL, {
        params: {
          part: "snippet",
          maxResults: 25,
          key: KEY,
          q: keyword,
        },
      });
      const videoId = res.data.items[0].id.videoId;
      return videoId;
    } catch (error) {
      return error;
    }
  }

  componentDidMount() {
    this.searchByKeyword(this.props.keyword)
      .then((data) => this.setState({ videoId: data }))
      .catch((err) => console.log(err));
  }

  componentDidUpdate() {
    console.log(this.state.videoId);
  }

  render() {
    return (
      <div className="youtubeBox">
        <iframe
          width="100%"
          height="100%"
          src={`http://www.youtube.com/embed/${this.state.videoId}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
      </div>
    );
  }
}

export default Youtube;
