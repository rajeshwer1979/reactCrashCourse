import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
    <div>Copyright &copy; 2023</div>
    {/* <Navigate to="/about" /> */}
    <Link to="/">About</Link>
    </footer>
  )
}

export default Footer
