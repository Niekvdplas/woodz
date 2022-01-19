import {
  Link
} from 'react-router-dom';
export const Navigation = (props) => {
  return (
  
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <a className='navbar-brand page-scroll' href='#page-top'>
            <img src="img/logo.jpg" alt='...' width='225' className='headerlogo' />
          </a>{' '}
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a href='/#about' className='page-scroll'>
                Over ons
              </a>
            </li>
            <li>
              <a href='/#services' className='page-scroll'>
                Diensten
              </a>
            </li>
            <li>
              <a href='/#portfolio' className='page-scroll'>
                Portfolio
              </a>
            </li>
            {/*
            <li>
              <a href='#testimonials' className='page-scroll'>
                Wat onze klanten zeggen
              </a>
            </li>
            */}
            <li>
              <a href='/#team' className='page-scroll'>
                Team
              </a>
            </li>
            <li>
              <a href='/#contact' className='page-scroll'>
                Contact
              </a>
            </li>
            <li>
              <Link to='/shop' className='page-scroll'>
                Kozijnen samenstellen
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
