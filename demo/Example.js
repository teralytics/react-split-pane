import React from 'react';
import SplitPane from '../src/SplitPane';


var Example = React.createClass({

    render: function() {
        return (
            <SplitPane orientation="horizontal" minSize="50">
                <div></div>
                <div></div>
            </SplitPane>
        );
    }

});

React.render(<Example />, document.body);