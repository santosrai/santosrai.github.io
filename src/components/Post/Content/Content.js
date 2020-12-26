// @flow strict
import React from 'react';
import {useEffect} from 'react'
import styles from './Content.module.scss';
import Comment from '../../Comments/comment'

type Props = {
  body: string,
  title: string
};

const commentBox = React.createRef()

function Content({ body, title }: Props) {

  useEffect(() => {
    const scriptEl = document.createElement('script')
    scriptEl.async = true
    scriptEl.src = 'https://utteranc.es/client.js'
    scriptEl.setAttribute('repo', 'santosrai/santosrai.github.io')
    scriptEl.setAttribute('issue-term', 'title')
    scriptEl.setAttribute('id', 'utterances')
    scriptEl.setAttribute('theme', 'github-light')
    scriptEl.setAttribute('crossorigin', 'anonymous')
    if (commentBox && commentBox.current) {
      commentBox.current.appendChild(scriptEl)
    } else {
      console.log(`Error adding utterances comments on: ${commentBox}`)
    }
  }, [])

return (
  <div className={styles['content']}>
    <h1 className={styles['content__title']}>{title}</h1>
    <div className={styles['content__body']} dangerouslySetInnerHTML={{ __html: body }} />
    <Comment commentBox={commentBox} />
  </div>
);

}

export default Content;
