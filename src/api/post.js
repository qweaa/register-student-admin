import request from '@/utils/request'

export function getPostList({ currentPage = 1, pageSize = 10 }) {
    return request({
        url: '/index.php/index/Postcontroller/getAllPost',
        method: 'get',
        params: { currentPage, pageSize }
    })
}

export function deletePostById(postId) {
    return request({
        url: '/index.php/index/Postcontroller/deletePostById',
        method: 'post',
        data: { postId }
    })
}

export function getReplyByPostid(postId) {
    return request({
        url: '/index.php/index/Replycontroller/getReplyByPostid',
        method: 'post',
        data: { postId }
    })
}

export function addPost({ title, content, posterId, poster, headImage }) {
    return request({
        url: '/index.php/index/Postcontroller/addPost',
        method: 'post',
        data: { title, content, posterId, poster, headImage }
    })
}   