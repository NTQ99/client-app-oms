import React, { Component } from "react";

import { Card } from "react-bootstrap";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory, {
  PaginationProvider,
} from "react-bootstrap-table2-paginator";
import ToolkitProvider from "react-bootstrap-table2-toolkit";
import filterFactory from 'react-bootstrap-table2-filter';

import { Pagination } from "../pagination/Pagination";


class CustomTable extends Component {
  render() {
    const {options, entities, columns, Search, Toolbar, expandRow, defaultSorted, rowStyle, title, children, onFilter} = this.props;
    return (
      <PaginationProvider pagination={paginationFactory(options)}>
        {({ paginationProps, paginationTableProps }) => (
          <ToolkitProvider
            keyField="id"
            data={entities}
            columns={columns}
            search
            exportCSV
          >
            {(props) => (
              <Card className="card-custom gutter-b">
                <div className="card-header flex-wrap border-0 pt-6 pb-0">
                  <div className="card-title">
                    <h3 className="card-label">{title}</h3>
                  </div>
                  <div className="card-toolbar">
                      <Toolbar {...props} />
                  </div>
                </div>
                <Card.Body>
                  {children}
                  {/* begin:: Toolbar */}
                    <div className="mb-7">
                      {/* <div className="row align-items-center">
                        <div className="col-lg-9 col-xl-6"> */}
                          <Search {...props.searchProps} onFilter={onFilter} />
                        {/* </div>
                      </div> */}
                    </div>
                  {/* end:: Toolbar */}
                  <Pagination paginationProps={paginationProps}>
                    {/* begin:: Table */}
                    <BootstrapTable
                      {...props.baseProps}
                      {...paginationTableProps}
                      onDataSizeChange={(e) => (options.totalSize = e.dataSize)}
                      wrapperClasses="table-responsive"
                      bordered={false}
                      classes="table table-head-custom table-vertical-center overflow-scroll"
                      bootstrap4
                      defaultSorted={ defaultSorted } 
                      expandRow={expandRow}
                      rowStyle={rowStyle}
                      filter={ filterFactory() }
                      noDataIndication="Không tìm thấy bản ghi nào"
                      // remote
                    />
                    {/* end:: Table */}
                  </Pagination>
                </Card.Body>
              </Card>
            )}
          </ToolkitProvider>
        )}
      </PaginationProvider>
    );
  }
}

export default CustomTable;
