import Page from '../layouts/main'
import moment from 'moment'
export default () => (
  <Page>
    <div className='time'>
      {moment().subtract('1 minute').format('ddd. h:mm A')}
    </div>
    <div className='message inbound'>
      <div className='text'>
        <p>Bleep bloop!</p>
      </div>
    </div>
    <div className='message inbound'>
      <div className='text'>
        <p>What's up?</p>
      </div>
    </div>
    <div className='message outbound'>
      <div className='text'>
        <p>PING</p>
      </div>
    </div>
    <div className='message inbound'>
      <div className='text'>
        <p>PONG 🎉</p>
      </div>
    </div>
    <div className='message outbound'>
      <div className='text'>
        <p>Ok but what about a really long message? Huh, what then?</p>
      </div>
    </div>
    <style jsx>{`
      .time {
        color: #ccc;
        text-align: center;
        margin: 0 20% 1em 20%;
      }
      .message {
        margin-bottom: 10px;
        display: block;
        clear: both;
      }
      .text {
        font-size: 1.3em;
        display: inline-block;
        border-radius: 30px;
        padding: 0 1em;
        margin-bottom: 0.3em;
        max-width: 300px
      }
      .message.inbound .text {
        float: left;
        padding-right: 1.3em;
        background-color: #ddd;
        border-bottom-left-radius: 4px;
      }
      .message.inbound + .message.inbound .text {
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
      }
      .message.outbound .text {
        float: right;
        background-color: #fab;
        align: right;
        border-bottom-right-radius: 4px;
      }
      .message.outbound + .message.outbound .text {
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
      }
    `}</style>
  </Page>
)
