export default () => (
  <nav role='navigation'>
    <header>
      <p className='title'>bBot web adapter</p>
    </header>
    <style jsx>{`
      nav {
        height: 40px;
        width: 100%;
        clear: both;
        float: none;
        display: flex;
        margin-bottom: 20px;
        font-weight: lighter;
        background: rgba(0,0,0,0.1);
        border-bottom: 1px solid #aaa;
      }
      header {
        overflow: auto;
        padding: 0 20px;
      }
    `}</style>
  </nav>
)
