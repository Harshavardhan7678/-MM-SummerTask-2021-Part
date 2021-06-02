import React from 'react';
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import ChevronRightRounded from '@material-ui/icons/ChevronRightRounded';
import TextInfoContent from '@mui-treasury/components/content/textInfo';
import { useWideCardMediaStyles } from '@mui-treasury/styles/cardMedia/wide';
import { useN01TextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/n01';
import { useBouncyShadowStyles } from '@mui-treasury/styles/shadow/bouncy';
import { Link } from "react-router-dom";

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 275,
    margin: 20,
    boxShadow: 'none',
    borderRadius: 13,
  },

  content: {
    padding: 24,
  },

  cta: {
    marginTop: 20,
    textTransform: 'initial',
    color: "#D0D0D0",
  },
}));

export const ImageCard = React.memo(function NewsCard() {
  const styles = useStyles();
  const mediaStyles = useWideCardMediaStyles();
  const textCardContentStyles = useN01TextInfoContentStyles();
  const shadowStyles = useBouncyShadowStyles();
  return (
    <Card className={cx(styles.root, shadowStyles.root)}>
      <CardMedia
        classes={mediaStyles}
        image={
          'https://images.unsplash.com/photo-1468774871041-fc64dd5522f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2689&q=80'
        }
      />
      <CardContent className={styles.content}>
        <TextInfoContent
          classes={textCardContentStyles}
          overline={'March 20, 2019'}
          heading={'What happened in Thailand?'}
          body={
            'Kayaks crowd Three Sisters Springs, where people and manatees maintain controversial coexistence.'
          }
        />
        <Link  to="/Single" style={{ textDecoration: "none", color: "inherit" }}>
        <Button color={'primary'} fullWidth className={styles.cta}>
          Find Out More <ChevronRightRounded />
        </Button>
        </Link>
      </CardContent>
    </Card>
  );
});

export default ImageCard