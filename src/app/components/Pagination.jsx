/* eslint-disable react/no-array-index-key */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import {
  ChevronLeft,
  ChevronRight,
  IconButton,
  Grid,
  MoreHoriz,
} from '~/app/components';
import { createStyles, withStyles } from '~/utils/helpers';

class Pagination extends PureComponent {
  get lastPage() {
    const { total, size } = this.props;
    const floor = Math.floor(total / size);
    const ceil = Math.ceil(total / size);
    return floor === ceil ? floor - 1 : floor;
  }

  get pages() {
    const { page } = this.props;
    const { lastPage } = this;
    const aroundCurrent = Array.from(
      { length: 5 },
      (_, i) => i + page - 2
    ).filter(p => p >= 0 && p <= lastPage);
    const lowerAroundCurrent = aroundCurrent[0];
    const lowerBand =
      lowerAroundCurrent <= 2
        ? [0, 1].filter(p => p < lowerAroundCurrent)
        : [0, NaN];

    const higherAroundCurrent = aroundCurrent[aroundCurrent.length - 1];
    const upperBand =
      higherAroundCurrent >= lastPage - 2
        ? [lastPage - 1, lastPage].filter(p => p > higherAroundCurrent)
        : [NaN, lastPage];

    return [...lowerBand, ...aroundCurrent, ...upperBand];
  }

  get prev() {
    const { classes, onPageChange, page } = this.props;

    return page <= 0 ? null : (
      <IconButton
        className={classes.button}
        color="inherit"
        onClick={() => onPageChange(page - 1)}
      >
        <ChevronLeft />
      </IconButton>
    );
  }

  get next() {
    const { classes, onPageChange, page } = this.props;
    const isLastPage = page === this.lastPage;

    return isLastPage ? null : (
      <IconButton
        className={classes.button}
        color="inherit"
        onClick={() => onPageChange(page + 1)}
      >
        <ChevronRight />
      </IconButton>
    );
  }

  get pager() {
    const { classes, onPageChange, page } = this.props;

    return (
      <Grid className={classes.pager}>
        {this.pages.map((p, i) =>
          !Number.isNaN(parseFloat(p)) ? (
            <IconButton
              name={`page-${p}`}
              color="inherit"
              onClick={() => onPageChange(p)}
              className={cn(classes.page, p === page && classes.current)}
              key={`${p}-${i}`}
            >
              {p + 1}
            </IconButton>
          ) : (
            <IconButton className={classes.page} disabled key={`${p}-${i}`}>
              <MoreHoriz />
            </IconButton>
          )
        )}
      </Grid>
    );
  }

  render() {
    const { classes } = this.props;

    return (
      <Grid className={classes.root}>
        <Grid className={classes.prev}>{this.prev}</Grid>
        {this.pager}
        <Grid className={classes.next}>{this.next}</Grid>
      </Grid>
    );
  }
}

Pagination.propTypes = {
  classes: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  onPageChange: PropTypes.func,
  page: PropTypes.number,
  size: PropTypes.number,
  total: PropTypes.number,
};

Pagination.defaultProps = {
  onPageChange: () => undefined,
  page: 1,
  size: 1,
  total: 50,
};

const styles = ({ spacing, palette }) =>
  createStyles({
    button: {
      borderRadius: 0,
    },
    current: {
      color: palette.primary.main,
      pointerEvents: 'none',
    },
    next: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    page: {
      borderRadius: 0,
      height: spacing(6),
      width: spacing(6),
    },
    pager: {
      '& > span': {
        borderRight: [[1, 'solid', palette.formHeader]],
      },
      borderLeft: [[1, 'solid', palette.formHeader]],
    },
    prev: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    root: {
      border: [[1, 'solid', palette.formHeader]],
      borderRadius: 4,
      justifyContent: 'space-between',
    },
  });

export default withStyles(styles)(Pagination);
