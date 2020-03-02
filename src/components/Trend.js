import React from 'react';
import { Icon, Item } from 'semantic-ui-react';

import './styles/Trend.css';

export default function Trend(props) {
  const imageUrl = `/photo?maxwidth=400&photoreference=${props.details.photos[0].photoReference}`;
  return (
    <Item >
      <Item.Image size='medium' src={imageUrl} decoding='async'/>
      <Item.Content>
        <Item.Header>{props.details.name}</Item.Header>
        <Item.Meta>{props.details.formattedAddress}</Item.Meta>
        <Item.Description>
          <Icon name='google plus' color='red'/>
          {`${props.details.rating} Google review rating`}
          </Item.Description>
        <Item.Extra>
          <Icon name='twitter' color='blue'/>
          <span>{`${props.totalTweets} Tweets`}</span>
          <Icon name='heart' color='red'/>
          <span>{`${props.totalFavorites} Favorites`}</span>
          <Icon name='retweet' color='blue'/>
          <span>{`${props.totalRetweets} Retweets`}</span>
        </Item.Extra>
      </Item.Content>
    </Item>
  );
}