import { Link, useMatch, useResolvedPath } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav">
      <Link to='/' className='site-title'>NBA Fantasy Analyzer</Link>
      <ul>
        <CustomLink to="/search">Search</CustomLink>
      </ul>
    </nav>
  );
};

export default Navbar;



function CustomLink({to , children, ...props}){
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end:true})
  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>{children}</Link>
    </li>
  )
}