export const Gallery = (props) => {
  return (
    <div id='portfolio' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Portfolio</h2>
          <p>
            Hier een aantal voorbeelden van ons vakwerk.
          </p>
        </div>
        <div className='row'>
          <div className='portfolio-items'>
            <div className='col-sm-6 col-md-4 col-lg-4'>
              <div className='portfolio-item'>
                <div className='hover-bg'>
                  {' '}
                    <div className='hover-text'>
                      <h4>Ook voor een mooie voordeur kunt u bij ons terecht</h4>
                    </div>
                    <img
                      src='img/portfolio/door.jpg'
                      className='img-responsive'
                      alt='Project Title'
                    />{' '}
                </div>
              </div>
            </div>
            <div className='col-sm-6 col-md-4 col-lg-4'>
              <div className='portfolio-item'>
                <div className='hover-bg'>
                  {' '}
                    <div className='hover-text'>
                      <h4>Prachtige kozijnen, klaar voor transport</h4>
                    </div>
                    <img
                      src='img/portfolio/frames.jpg'
                      className='img-responsive'
                      alt='Project Title'
                    />{' '}
                </div>
                <div className='hover-bg'>
                  {' '}
                    <div className='hover-text'>
                      <h4>Prachtige kozijnen, klaar voor transport</h4>
                    </div>
                    <img
                      src='img/portfolio/transport.jpg'
                      className='img-responsive'
                      alt='Project Title'
                    />{' '}
                </div>
              </div>
            </div>
            <div className='col-sm-6 col-md-4 col-lg-4'>
              <div className='portfolio-item'>
                <div className='hover-bg'>
                  {' '}
                    <div className='hover-text'>
                      <h4>Afgewerkte winkelpui</h4>
                    </div>
                    <img
                      src='img/portfolio/storefront.jpg'
                      className='img-responsive'
                      alt='Project Title'
                    />{' '}
                </div>
              </div>
            </div>
            <div className='col-sm-6 col-md-4 col-lg-4'>
              <div className='portfolio-item'>
                <div className='hover-bg'>
                  {' '}
                    <div className='hover-text'>
                      <h4>Before</h4>
                    </div>
                    <img
                      src='img/portfolio/collage1.jpg'
                      className='img-responsive'
                      alt='Project Title'
                    />{' '}
                </div>
              </div>
            </div>
            <div className='col-sm-6 col-md-4 col-lg-4'>
              <div className='portfolio-item'>
                <div className='hover-bg'>
                  {' '}
                    <div className='hover-text'>
                      <h4>Tijdens</h4>
                    </div>
                    <img
                      src='img/portfolio/collage2.jpg'
                      className='img-responsive'
                      alt='Project Title'
                    />{' '}
                </div>
              </div>
            </div>
            <div className='col-sm-6 col-md-4 col-lg-4'>
              <div className='portfolio-item'>
                <div className='hover-bg'>
                  {' '}
                    <div className='hover-text'>
                      <h4>After</h4>
                    </div>
                    <img
                      src='img/portfolio/collage3.jpg'
                      className='img-responsive'
                      alt='Project Title'
                    />{' '}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
