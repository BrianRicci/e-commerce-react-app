import ScrollToTopButton from '../../../UI/ButtonForTop';
import classes from './ShowcaseFooter.module.css';

const ShowcaseFooter: React.FC = () => {
  return (
    <div>
      <footer className={classes.footer}>© 2022 React e-commerce store by David Rizametov;</footer>
      <ScrollToTopButton />
    </div>
  )
}
export default ShowcaseFooter;
