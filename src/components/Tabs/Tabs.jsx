export const Tabs = ({ tabs, activeTabId, onTabSelected }) => (
  <ul>
    {tabs.map(tab => (
      <li
        key={tab.id}
        data-cy="Tab"
        className={tab.id === activeTabId ? 'is-active' : ''}
      >
        <a
          href={`#${tab.id}`}
          data-cy="TabLink"
          onClick={e => {
            e.preventDefault(); // щоб не стрибав до #tab-id
            if (tab.id !== activeTabId) {
              onTabSelected(tab.id);
            }
          }}
        >
          {tab.title}
        </a>
      </li>
    ))}
  </ul>
);
