import React from 'react'
import {Card, CardTitle, CardMedia, CardText} from 'material-ui/Card'

export class List extends React.Component {
  render () {
    const { data } = this.props
    // data is an array of item which consisting of title, imgSrc, author
    return (
      <div style={{
        backgroundColor: '#000'        
      }}>        
        {
          data.map(el =>
            <Card 
              containerStyle={{
                height: 300,
                width: 220,
                backgroundColor: '#000'
              }}
              style={{
                backgroundColor: '#000',
                display: 'inline-block',
                float: 'left'
              }}
            >
              <CardTitle 
                title={el.title} 
                subtitle={el.author} 
                titleStyle={{                                    
                  color: '#fff',
                  fontSize: 18
                }}
                subtitleStyle={{
                  color: '#ddd',
                  fontSize: 12
                }}
              />
              <CardMedia
                title={el.title}
                mediaStyle={{
                  height: 200,
                  width: 200,
                  marginLeft: 'auto',
                  marginRight: 'auto'
                }}
              >              
                <img src={el.imgSrc} alt='' style={{width: 200, height: 200}}/>
              </CardMedia>
            </Card>
          )
        }        
      </div>
    )
  }
}