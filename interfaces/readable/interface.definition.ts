/* bplint-disable */
import { z, InterfaceDefinition } from '@botpress/sdk'

const baseItem = z.object({ id: z.string() })
const withId = (schema: z.ZodTypeAny) => z.intersection(schema, baseItem)
const templateName = '{{camelCase item}}{{pascalCase name}}'

export default new InterfaceDefinition({
  name: 'readable',
  version: '0.0.1',
  entities: {
    item: {
      schema: baseItem,
    },
  },
  events: {},
  actions: {
    read: {
      input: {
        schema: () => baseItem,
      },
      output: {
        schema: (args) => z.object({ item: withId(args.item) }),
      },
    },
  },
  templateName,
})