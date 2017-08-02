import React from 'react'
import { List } from './List'
export default class Collection extends React.Component {
  render () {
    const data = [{
      title: 'Siamese Dream',
      author: 'The Smashing Pumpkins',
      imgSrc: 'https://img1.doubanio.com/lpic/s3567939.jpg'
    }, {
      title: 'Tell Me I\'m Pretty',
      author: 'Cage the Elephant',
      imgSrc: 'https://img1.doubanio.com/lpic/s28358639.jpg'
    }]
    return (
      <div style={{
        textAlign: 'center',
        color: '#fff',
        backgroundColor: '#000',
        fontSize: 20,
        fontFamily: 'STFangsong, Fangsong'
      }}>
        <List data={data} />
      </div>
    )    
  }
}