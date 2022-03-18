import "dotenv/config";

// config information, such as client ID and secret adn redirect uri
const API_KEY = process.env.API_KEY;

export function getYouTubeChannelBrandDetails(accessToken) {
  //https://developers.google.com/youtube/v3/docs/channels/list

  // type of data in response

  let output = {
    source: "getYouTubeChannelBrandDetails",
    payload: "",
  };

  const RESPONSE_KIND = "youtube#channelListResponse"; // what I expect as kind of API that respond

  let youtubeParameters = {
    part: "brandingSettings",
    mine: "true",
  };

  const URL_ENPOINT =
    "https://www.googleapis.com/youtube/v3/channels?part=" +
    youtubeParameters.part +
    "&mine=" +
    youtubeParameters.mine +
    "&key=" +
    API_KEY;

  const fetch_params = {
    method: "get",
    headers: {
      Authorization: "Bearer " + accessToken,
      Accept: "application/json",
    },
  };

  return fetch(URL_ENPOINT, fetch_params)
    .then((httpResponse) => {
      if (httpResponse.ok) {
        return httpResponse.json();
      }
    })
    .then((jsonHttpData) => {
      if (jsonHttpData.kind && RESPONSE_KIND === jsonHttpData.kind) {
        // check if it is the real API that is responding
        output.payload = jsonHttpData;
      } else {
        Promise.reject(output.source + " Fetch did not succeed");
      }
      return output;
    });
  // .catch(Promise.reject(output.source + " Fetch did not succeed"));
}

export function getYouTubePlaylistList(accessToken, channelID, nextPageToken) {
  //https://developers.google.com/youtube/v3/docs/channels/list

  // type of data in response

  let output = {
    source: "getYouTubePlaylistList",
    payload: "",
  };

  const RESPONSE_KIND = "youtube#playlistListResponse"; // what I expect as kind of API that respond

  let youtubeParameters = {
    part: "snippet%2CcontentDetails%2Cstatus",
    maxResults: "50", // maxResults defined for the API
  };

  const URL_ENPOINT =
    "https://www.googleapis.com/youtube/v3/playlists?part=" +
    youtubeParameters.part +
    "&channelId=" +
    channelID +
    "&maxResults=" +
    youtubeParameters.maxResults +
    "&key=" +
    API_KEY;

  //'https://www.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=UCAcledhnRlP88lFAtZbYyuw&maxResults=50&key=AIzaSyD4YznPn3wNK8ItV62B2rIsFMOgbkNhE-4'

  const fetch_params = {
    method: "get",
    headers: {
      Authorization: "Bearer " + accessToken,
      Accept: "application/json",
    },
  };

  return fetch(URL_ENPOINT, fetch_params)
    .then((httpResponse) => {
      if (httpResponse.ok) {
        return httpResponse.json();
      }
    })
    .then((jsonHttpData) => {
      //return jsonHttpData

      if (jsonHttpData.kind && RESPONSE_KIND === jsonHttpData.kind) {
        // check if it is the real API that is responding
        output.payload = jsonHttpData;
      } else {
        Promise.reject(output.source + " Fetch did not succeed");
      }

      return output;
    });
  // .catch(Promise.reject(output.source + " Fetch did not succeed"));
}

/*

GET https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&id=PLgA34C-sbN2EZheVquVkF_PeCmxY6glIT%2CPLgA34C-sbN2GzoP9cXJSqnWGtVPXNTUwr%2CPLgA34C-sbN2HuMBsQMjFuC-M5cfiBkP3Y&key=[YOUR_API_KEY] HTTP/1.1

Authorization: Bearer [YOUR_ACCESS_TOKEN]
Accept: application/json

 */

export function getPlaylistsVideos(accessToken, playlistId, nextPageToken) {
  //https://developers.google.com/youtube/v3/docs/channels/list

  // type of data in response

  let output = {
    source: "getPlaylistsVideos",
    payload: "",
  };

  const RESPONSE_KIND = "youtube#playlistItemListResponse"; // what I expect as kind of API that respond

  let youtubeParameters = {
    part: "snippet%2CcontentDetails%2Cstatus",
    maxResults: "50", // maxResults defined for the API
  };

  // https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&id=PLgA34C-sbN2EZheVquVkF_PeCmxY6glIT%2CPLgA34C-sbN2GzoP9cXJSqnWGtVPXNTUwr%2CPLgA34C-sbN2HuMBsQMjFuC-M5cfiBkP3Y&key=[YOUR_API_KEY] HTTP/1.1

  const URL_ENPOINT =
    "https://www.googleapis.com/youtube/v3/playlistItems?part=" +
    youtubeParameters.part +
    "&playlistId=" +
    playlistId +
    "&maxResults=" +
    youtubeParameters.maxResults +
    "&key=" +
    API_KEY;

  const fetch_params = {
    method: "get",
    headers: {
      Authorization: "Bearer " + accessToken,
      Accept: "application/json",
    },
  };

  return fetch(URL_ENPOINT, fetch_params)
    .then((httpResponse) => {
      if (httpResponse.ok) {
        return httpResponse.json();
      }
    })
    .then((jsonHttpData) => {
      //return jsonHttpData

      if (jsonHttpData.kind && RESPONSE_KIND === jsonHttpData.kind) {
        // check if it is the real API that is responding
        output.payload = jsonHttpData;
      } else {
        Promise.reject(output.source + " Fetch did not succeed");
      }

      return output;
    });
  // .catch(Promise.reject(output.source + " Fetch did not succeed"));
}

/*
export function createPlaylist(accessToken, playlist) {
  //https://developers.google.com/youtube/v3/docs/channels/list

  // to prevent 429 HTTP error "rate limit exceeded"
  setTimeout(() => {
    console.log("waiting to start the process...");
  }, 200);

  // type of data in response
  let output = {
    source: "createPlaylist",
    payload: "",
  };

  const RESPONSE_KIND = "youtube#playlist"; // what I expect as kind of API that respond

  let youtubeParameters = {
    part: "snippet%2Cstatus",
  };

  const URL_ENPOINT =
    "https://www.googleapis.com/youtube/v3/playlists?part=" +
    youtubeParameters.part +
    "&key=" +
    API_KEY;

  const fetch_params = {
    method: "post",
    headers: {
      Authorization: "Bearer " + accessToken,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      snippet: {
        title: playlist.name + " test",
        description: playlist.description + " test",
      },
      status: {
        privacyStatus: playlist.privacyStatus,
      },
    }),
  };

  return fetch(URL_ENPOINT, fetch_params)
    .then((httpResponse) => {
      if (httpResponse.ok) {
        return httpResponse.json();
      }
    })
    .then((jsonHttpData) => {
      //return jsonHttpData

      if (jsonHttpData.kind && RESPONSE_KIND === jsonHttpData.kind) {
        // check if it is the real API that is responding
        output.payload = jsonHttpData;
      } else {
        Promise.reject(output.source + " Fetch did not succeed");
      }

      return output;
    })
    // .catch(Promise.reject(output.source + " Fetch did not succeed"));
}

export function createPlaylistVideos(accessToken, playlistId, video) {
  //https://developers.google.com/youtube/v3/docs/channels/list

  // type of data in response

  // to prevent 429 HTTP error "rate limit exceeded"
  setTimeout(() => {
    console.log("waiting to start the process...");
  }, 300);

  let output = {
    source: "createPlaylistVideos",
    payload: "",
  };

  const RESPONSE_KIND = "youtube#playlistItem"; // what I expect as kind of API that respond

  let youtubeParameters = {
    part: "snippet",
    //part: 'snippet%2Cstatus'
  };

  const URL_ENPOINT =
    "https://www.googleapis.com/youtube/v3/playlistItems?part=" +
    youtubeParameters.part +
    "&key=" +
    API_KEY;

  const fetch_params = {
    method: "post",
    headers: {
      Authorization: "Bearer " + accessToken,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      snippet: {
        playlistId: playlistId,
        position: video.position,
        resourceId: {
          kind: "youtube#video",
          videoId: video.videoId,
        },
      },
    }),
  };

  //output.payload = URL_ENPOINT + ' // ' + JSON.stringify(fetch_params)

  //return output

  return fetch(URL_ENPOINT, fetch_params)
    .then((httpResponse) => {
      if (httpResponse.ok) {
        return httpResponse.json();
      }
    })
    .then((jsonHttpData) => {
      //return jsonHttpData

      if (jsonHttpData.kind && RESPONSE_KIND === jsonHttpData.kind) {
        // check if it is the real API that is responding
        output.payload = jsonHttpData;
      } else {
        Promise.reject(output.source + " Fetch did not succeed");
      }

      return output;
    })
    // .catch(Promise.reject(output.source + " Fetch did not succeed"));
}
*/
