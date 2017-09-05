'use strict';

/* global $, jQuery */

function solution() {
  let count = $('.comment-list').attr('data-count');
  let url = `https://www.example.com/comments?count=${count}`;
  let loadingPlaceholder = 'Loading...';
  let commentList = [];

  $('.comment-list').html(loadingPlaceholder);

  fetch(url)
    .then(response => {
      if (response.status === 200) {
        return response;
      } else {
        $('.comment-list').empty();
        throw new Error(response.statusText);
      }
    })
    .then(response => response.json())
    .then(data => {
      $('.comment-list').empty();
      return data;
    })
    .then(comments => {
      comments.forEach(comment => {
        commentList.push(
          `<div class="comment-item"><div class="comment-item__username">${comment.username}</div><div class="comment-item__message">${comment.message}</div></div>`
        );
      });
      return commentList.join('');
    })
    .then(comments => {
      $('.comment-list').append(comments);
    })
    .catch(error => {
      $('.comment-list').empty();
    });
}
