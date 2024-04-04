import {} from 'react'

const Loader = () => {
  return (
    <>
    <section>
      <div id="preloader">
        <div className="ctn-preloader">
          <div className="animation-preloader">
            <div className="spinner"></div>
            <div className="txt-loading">
              <span data-text-preloader="O" className="letters-loading"> O </span>
              <span data-text-preloader="N" className="letters-loading"> N </span>
              <span data-text-preloader="E" className="letters-loading"> E </span>
              <span data-text-preloader="D" className="letters-loading"> D </span>
              <span data-text-preloader="E" className="letters-loading"> E </span>
              <span data-text-preloader="A" className="letters-loading"> A </span>
              <span data-text-preloader="L" className="letters-loading"> L </span>
              <span data-text-preloader="S" className="letters-loading"> S </span>
            </div>
          </div>
          <div className="loader-section section-left"></div>
          <div className="loader-section section-right"></div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Loader