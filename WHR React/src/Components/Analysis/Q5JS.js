import TableauReport from 'tableau-react-embed';

const options = {
    height: 730,
    width: 1200,
    hideTabs: true,
};
   
const filters = {
    Colors: ['Blue', 'Red'],
    Sizes: ['Small', 'Medium']
};
   
const parameters = {
    Param1: 'Value',
    Param2: 'Other Value'
};
   
const refreshSeconds = 60 * 5;
   
const Q5JS = props => (
    <TableauReport
      url="https://public.tableau.com/shared/XF9WR6FNH?:display_count=n&:origin=viz_share_link"
      filters={filters}
      parameters={parameters}
      options={options} // vizCreate options
      refreshSeconds={refreshSeconds}
    />
)

export default Q5JS;