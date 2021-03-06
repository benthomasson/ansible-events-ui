import * as React from 'react';
import { PageSection, Title } from '@patternfly/react-core';
import { useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { CodeBlock, CodeBlockCode  } from '@patternfly/react-core';

import Ansi from "ansi-to-react";
import {
  Card,
  CardBody as PFCardBody,
  CardTitle,
  SimpleList as PFSimpleList,
  SimpleListItem,
  Stack,
  StackItem,
} from '@patternfly/react-core';
import styled from 'styled-components';
import {getServer} from '@app/utils/utils';
import {TopToolbar} from "@app/shared/top-toolbar";


const CardBody = styled(PFCardBody)`
  white-space: pre-wrap;
  `
const SimpleList = styled(PFSimpleList)`
  white-space: pre-wrap;
`

const endpoint = 'http://' + getServer() + '/api/rule_set_file/';
const endpoint2 = 'http://' + getServer() + '/api/rule_set_file_json/';

const RuleSetFile: React.FunctionComponent = () => {

  const [ruleSetFile, setRuleSetFile] = useState([]);
  const [rulesets, setRuleSets] = useState([]);

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
     fetch(endpoint + id, {
       headers: {
         'Content-Type': 'application/json',
       },
     }).then(response => response.json())
    .then(data => setRuleSetFile(data));
     fetch(endpoint2 + id, {
       headers: {
         'Content-Type': 'application/json',
       },
     }).then(response => response.json())
    .then(data => setRuleSets(data.rulesets));
  }, []);

  return (
  <React.Fragment>
    <TopToolbar>
      <Title headingLevel={"h2"}>{`Rule set ${ruleSetFile.name}`}</Title>
    </TopToolbar>
    <Stack>
      <StackItem>
          <Card>
            <CardTitle>Rule Sets</CardTitle>
            <CardBody>
              {rulesets.length !== 0 && (
                <SimpleList style={{ whiteSpace: 'pre-wrap' }}>
                  {rulesets.map((item, i) => (
                    <SimpleListItem>{item.name}
                    <div>
                    { item.sources.map((source, j) => (
                    <div> {source.name} </div>))}
                    { item.rules.map((rule, j) => (
                    <div> {rule.name} {Object.keys(rule.action)} </div>))}
                    </div>
                    </SimpleListItem>
                  )) }
                </SimpleList>
              )}
            </CardBody>
          </Card>
        </StackItem>
        <StackItem>
          <Card>
    <CodeBlock>
      <CodeBlockCode id="code-content">{ruleSetFile.rulesets}</CodeBlockCode>
    </CodeBlock>
              </Card>
            </StackItem>
	</Stack>
  </React.Fragment>
)
}

export { RuleSetFile };
