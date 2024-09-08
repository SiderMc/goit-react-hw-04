import { Grid } from 'react-loader-spinner';
import css from './Loader.module.css';

export default function Loader() {
  return (
    <div className={css.loader}>
      <div className={css.loader__overlay}></div>
      <Grid
        visible={true}
        height="80"
        width="80"
        color="#02554c"
        ariaLabel="grid-loading"
        radius="12.5"
        wrapperClass={css.spinner}
      />
    </div>
  );
}
