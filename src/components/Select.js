import React from 'react';

class Select extends React.Component {
    static renderSelect(options, className, onChange) {

        const MakeItem = function (X) {
            return <option key={X}>{X}</option>;
        };
        return <select
            className = {className}
            onChange = {onChange}
        >
            {options.map(MakeItem)}
        </select>;
    };

    render() {
        const { options, className, onChange } = this.props;
        return (
            <div className="filter">
                <label>Filter by Skills
                    {Select.renderSelect(options, className, onChange)}
                </label>
            </div>
        );
    }
}

export default Select;