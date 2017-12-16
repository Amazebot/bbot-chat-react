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
        height: 100%;
        max-width: 620px;
        min-width: 50%;
        max-height: 620px;
        min-height: 50%;
        background: rgba(255,255,255,0.9);
        border-radius: 4px;
        overflow: hidden;
      }
      .page {
        padding: 20px;
      }
    `}</style>
  </div>
)
