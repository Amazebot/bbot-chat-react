import Body from './message-body'
export default () => (
  <div className='message {this.props.direction}'>
    <Body>
      { children }
    </Body>
    <style jsx>{`
      .message {
        margin-bottom: 10px;
        display: block;
        clear: both;
      }
      .body {
        font-size: 1.3em;
        display: inline-block;
        border-radius: 30px;
        padding: 0 1em;
        margin-bottom: 0.3em;
        max-width: 300px
      }
      .message.in .text {
        float: left;
        padding-right: 1.3em;
        background-color: #ddd;
        border-bottom-left-radius: 4px;
      }
      .message.in + .message.in .text {
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
      }
      .message.out .text {
        float: right;
        background-color: #fab;
        align: right;
        border-bottom-right-radius: 4px;
      }
      .message.out + .message.out .text {
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
      }
    `}</style>
  </div>
)
