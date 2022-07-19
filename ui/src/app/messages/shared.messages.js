// eslint-disable-next-line @typescript-eslint/no-var-requires
const { defineMessages } = require('react-intl');

const sharedMessages = defineMessages({
  name: {
    id: 'shared.name',
    defaultMessage: 'Name'
  },
  url: {
    id: 'shared.url',
    defaultMessage: 'Url'
  },
  add: {
    id: 'shared.add',
    defaultMessage: 'Add'
  },
  delete: {
    id: 'shared.delete',
    defaultMessage: 'Delete'
  },
  search: {
    id: 'shared.search',
    defaultMessage: 'Search'
  },
  filterByName: {
    id: 'shared.filterByName',
    defaultMessage: 'Filter by {name}'
  },
  noResultsFound: {
    id: 'shared.noResultsFound',
    defaultMessage: 'No results found'
  },
  noResult: {
    id: 'shared.noResult',
    defaultMessage: 'No {results}'
  },
  clearAllFilters: {
    id: 'shared.clearAllFilters',
    defaultMessage: 'Clear all filters'
  },
  clearAllFiltersDescription: {
    id: 'shared.clearAllFiltersDescription',
    defaultMessage:
      'No results match the filter criteria. Remove all filters or clear all filters to show results.'
  },
  ariaLabel: {
    id: 'shared.ariaLabel',
    defaultMessage: '{name} table'
  },
  updatedLabel: {
    id: 'shared.updatedLabel',
    defaultMessage: 'Updated'
  },
  project: {
    id: 'project.project',
    defaultMessage: 'Project'
  },
  projects: {
    id: 'project.projects',
    defaultMessage: 'Projects'
  },
  noprojects: {
    id: 'project.noprojects',
    defaultMessage: 'No projects'
  },
  addProject: {
    id: 'project.addProject',
    defaultMessage: 'Add project'
  },
  deleteProjectTitle: {
    id: 'project.deleteProject',
    defaultMessage: 'Delete project'
  },
  ruleset: {
    id: 'rulesets.ruleset',
    defaultMessage: 'Rule set'
  },
  rulesets: {
    id: 'rulesets.rulesets',
    defaultMessage: 'Rule sets'
  },
  norulesets: {
    id: 'rulesets.norulesets',
    defaultMessage: 'No rule sets'
  },
  addRuleSet: {
    id: 'rulesets.addRuleSet',
    defaultMessage: 'Add rule set'
  },
  deleteRuleSetTitle: {
    id: 'rulesets.deleteRuleSet',
    defaultMessage: 'Delete rule set'
  }
});

export default sharedMessages;
