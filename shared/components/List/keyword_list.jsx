import React, { Component } from 'react';
import { connect } from 'react-redux';
import  { getCorrelationInfo } from '../../actions/keyword';
import { bindActionCreators} from 'redux';
import { getValidationInfo } from '../../actions/keyword';
import { getHotTrends } from '../../actions/hotTrends'


class KeywordList extends Component {
  componentWillMount() {
    this.props.getHotTrends();
    if(this.props.keyword){
      console.log('we got in hedasdasdre on mount');
      this.props.getCorrelationInfo(this.props.keyword);
      
    }
  }

  componentWillReceiveProps(nextProps) {

      console.log('check if get correlation should be trigger')
    if(nextProps.keyword !== this.props.keyword) {
      if(nextProps.keyword) {
        console.log('triggering get correlation')
        this.props.getCorrelationInfo(nextProps.keyword);
      }
    }
  }

  getValidation(keyword,listItem) {
    console.log('determining validation between ', keyword, " and ", listItem);
    this.props.getValidationInfo(keyword,listItem);
  }

  renderList() {
    return this.props.list.items.map((listItem) => {
      if( (listItem.Keyword === this.props.validation.listItem) && (this.props.validation.results > 0) ) {
        let divStyle = {
          color: 'green'
        };
        return (
          <li className="list-group-item" style={divStyle} key={listItem.Keyword}>
            <span className="pull-xs-right">{listItem.Keyword}</span>
            <strong>{listItem.corr}</strong>
            <strong>{this.props.validation.results}</strong>
          </li>
        );
      }
      // onClick={this.getValidation.bind(this,this.props.keyword.Keyword,listItem.Keyword)}
      return (
      <li className="list-group-item" key={listItem.Keyword}>
          <span className="pull-xs-right">{listItem.Keyword}</span>
          <strong>{listItem.corr}</strong>
        </li>
      );
    });
  }
  // renderStocks() {
  //   if(this.props.stocks.length > 0) {
  //   return this.props.stocks.map((stockItem) => {
  //       return (
  //         <li className="list-group-item" key={stockItem.Keyword}>
  //           <span className="pull-xs-left">{stockItem.Keyword}</span>
  //           <strong>{listItem.corr}</strong>
  //         </li>
  //       );
  //     });
  //   }
  // }

  render() {
     if(this.props.list.items.length === 0) {
      return <div>Loading...</div>;
      }
    return (
      <div> Suggested Ideas
        <ul>
          {this.renderList()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    list: state.list,
    keyword: state.keyword.current,
    validation: state.validation.items,
  };
}

function mapDispatchToProps(dispatch) {
  let obj = {
    getCorrelationInfo: getCorrelationInfo,
    getValidationInfo: getValidationInfo,
    getHotTrends: getHotTrends
  };
  return bindActionCreators(obj, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(KeywordList);
