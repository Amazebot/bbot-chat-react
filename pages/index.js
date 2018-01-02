import moment from 'moment'
import Page from '../layouts/main'
import Message from '../components/message'
export default () => (
  <Page>
    <div className='time'>
      {moment().subtract('1 minute').format('ddd. h:mm A')}
    </div>
    <Message direction='in'>
      <p>Bleep bloop!</p>
    </Message>
    <Message direction='in'>
      <p>What's up?</p>
    </Message>
    <Message direction='out'>
      <p>PING</p>
    </Message>
    <Message direction='in'>
      <p>PONG 🎉</p>
    </Message>
    <Message direction='out'>
      <p>Ok but what about a really long message? Huh, what then?</p>
    </Message>
    <style jsx>{`
      .time {
        color: #ccc;
        text-align: center;
        margin: 0 20% 1em 20%;
      }
    `}</style>
  </Page>
)
