import { TabBar } from 'cafune';
import { Component } from 'preact';
const { TabBarItem } = TabBar;

export default class TabBarComp extends Component {
  state = {
    page: 'news'
  };
  onChange = activedId => {
    this.setState({
      page: activedId
    });
  };
  render({}, { page }) {
    return (
      <div>
        <TabBar activedId={page} onChange={this.onChange}>
          <TabBarItem
            text="news"
            id="news"
            icons={{
              actived: '/assets/icons/news_actived.png',
              normal: '/assets/icons/news.png'
            }}
          />
          <TabBarItem
            text="match"
            id="match"
            disabled={true}
            icons={{
              actived: '/assets/icons/news_actived.png',
              normal: '/assets/icons/news.png'
            }}
          />
          <TabBarItem
            text="leagues"
            id="leagues"
            icons={{
              actived: '/assets/icons/news_actived.png',
              normal: '/assets/icons/news.png'
            }}
          />
        </TabBar>
      </div>
    );
  }
}
