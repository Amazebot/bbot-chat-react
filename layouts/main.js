import Meta from '../components/meta'
import Nav from '../components/nav'
export default ({ children }) => (
  <div>
    <Meta />
    <div className='container'>
      <div className='chat'>
        <Nav />
        <div className='page'>
          { children }
        </div>
      </div>
    </div>
    <style jsx>{`
      div.container {
        height: 100%;
        width: 100%;
        padding: 0;
        margin: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
      }
      div.chat {
        position: relative;
        height: 75%;
        max-height: 620px;
        width: 50%;
        min-width: 320px
        max-width: 620px;
        background: rgba(255,255,255,0.9);
        box-shadow: 2px 2px 30px 0px rgba(0,0,0,0.10);
        border-radius: 4px;
        overflow: hidden;
      }
      .page {
        padding: 20px;
      }
    `}</style>
  </div>
)
