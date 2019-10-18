import React from 'react'

const AppPage: React.SFC = (props) => {
  return (
    <>
      {props.children}
      <style jsx global>{`
        body {
          --main-bg-white: #fff;
          --editor-white-50: rgba(255, 255, 255, 0.5);
          --main-bg-dark: #1e1e1e;
          --main-text-color: #f3f3f3;
          --main-text-font-size: 14px;
          --main-font-family: 'Roboto', sans-serif;
          --color-purple: #822cec;
          --editor-bg-black: #2d2d2d;
          --editor-bt-text-color: #1e6cb3;
          --editor-scrollbar-color: #494646b3;
          --link-grey: #ddd;
          --success-green: #2cbe4e;
        }

        html,
        body,
        #__next {
          font-family: var(--main-font-family);
          font-size: var(--main-text-font-size);
          background-color: var(--main-bg-white);
          color: var(--main-text-color);
          height: 100%;
          width: 100%;
          overflow: hidden;
          margin: 0;
        }

        input,
        textarea {
          font-family: var(--main-font-family);
          font-size: var(--main-text-font-size);
        }
        .ace_scroller {
          background-color: var(--editor-bg-black) !important;
        }
        .ace_scrollbar::-webkit-scrollbar {
          width: 10px;
          height: 10px;
        }
        .ace_scrollbar::-webkit-scrollbar-thumb {
          background: var(--editor-scrollbar-color);
          border-radius: 5px;
        }
      `}</style>
    </>
  )
}

export { AppPage }
