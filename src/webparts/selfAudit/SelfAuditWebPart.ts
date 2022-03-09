import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'SelfAuditWebPartStrings';
import SelfAudit from './components/SelfAudit';
import { ISelfAuditProps } from './components/ISelfAuditProps';
import { sp } from "@pnp/sp/presets/all";
export interface ISelfAuditWebPartProps {
  description: string;
}



export default class SelfAuditWebPart extends BaseClientSideWebPart<ISelfAuditWebPartProps> {
  public onInit(): Promise<void> {
    return super.onInit().then(_ => {
    sp.setup({
    spfxContext: this.context
    });
    });
    }
  public render(): void {
    const element: React.ReactElement<ISelfAuditProps> = React.createElement(
      SelfAudit,
      {
        description: this.properties.description,
        context: this.context
    
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
