import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import MuiTable from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Grid } from '~/app/components';
import { createStyles, withStyles } from '~/utils/helpers';

const Table = ({ classes, head, body }) => (
  <Grid className={classes.root}>
    <MuiTable className={classes.table}>
      <TableHead className={classes.tableHead}>
        <TableRow className={classes.tableHeadRow}>
          {head.map(({ key, title }) => (
            <TableCell key={key + title} className={classes.tableHeadCell}>
              {title}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody className={classes.tableBody}>
        {body.map(item => (
          <TableRow key={item.slug} className={classes.tableBodyRow}>
            {head.map(({ key, render }) => (
              <TableCell
                key={item.slug + key}
                className={classes.tableBodyCell}
              >
                {render ? render(item[key]) : item[key]}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </MuiTable>
  </Grid>
);

Table.propTypes = {
  body: PropTypes.arrayOf(PropTypes.object).isRequired,
  classes: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  head: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      render: PropTypes.func,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};

const styles = ({}) =>
  createStyles({
    root: {
      overflow: 'auto',
      width: '100%',
    },
    table: {},
    tableBody: {},
    tableBodyCell: {},
    tableBodyRow: {},
    tableHead: {},
    tableHeadCell: {},
    tableHeadRow: {},
  });

export default compose(
  memo,
  withStyles(styles)
)(Table);
