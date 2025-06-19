import 'App2.css'

export default function App () {
  return (
    <div className=' bg-dark' data-bs-theme='dark'>
      <header className='navbar sticky-top bg-dark flex-md-nowrap p-0 shadow' data-bs-theme='dark'>
        <button className='btn btn-primary' type='button' data-bs-toggle='offcanvas' data-bs-target='#offcanvas' aria-controls='offcanvas'>
          Button with data-bs-target
        </button>
      </header>
      <div className='container-xxl bd-gutter mt-3 my-md-4 bd-layout' data-bs-theme='dark'>
        <aside className='asideLayout'>
          <div className='offcanvas-lg offcanvas-start' tabIndex='-1' id='offcanvas' aria-labelledby='offcanvasExampleLabel'>
            <div className='offcanvas-header'>
              <h5 className='offcanvas-title' id='offcanvasExampleLabel'>
                Offcanvas
              </h5>
              <button type='button' className='btn-close' data-bs-dismiss='offcanvas' aria-label='Close' />
            </div>
            <div className='offcanvas-body'>
              <div>Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.</div>
              <div className='dropdown mt-3'>
                <button className='btn btn-secondary dropdown-toggle' type='button' data-bs-toggle='dropdown'>
                  Dropdown button
                </button>
                <ul className='dropdown-menu'>
                  <li>
                    <a className='dropdown-item' href='#'>
                      Action
                    </a>
                  </li>
                  <li>
                    <a className='dropdown-item' href='#'>
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className='dropdown-item' href='#'>
                      Something else here
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </aside>
        <main> asd</main>
      </div>
    </div>
  )
}
