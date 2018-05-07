import { convertData } from './dataConverter';

describe('dataConverter', () => {

  it('should convert data', () => {
    const data = [{
      data: {
        prop1: 'value1'
      },
      kids: {
        has_relatives: {
          records: [{
            data: {
              prop2: 'value2'
            },
            kids: {
              has_phone: {
                records: [{
                  data: {
                    prop3: 'value3'
                  },
                  kids: {}
                }]
              }
            }
          }]
        }
      }
    }];
    const convertedData = convertData(data);
    const expected = {
      headers: ['prop1'],
      hasItems: true,
      items: [{
        data: {
          prop1: 'value1'
        },
        hasKids: true,
        kids: [{
          name: 'has_relatives',
          headers: ['prop2'],
          hasItems: true,
          items: [{
            data: {
              prop2: 'value2'
            },
            hasKids: true,
            kids: [{
              name: 'has_phone',
              headers: ['prop3'],
              hasItems: true,
              items: [{
                data: {
                  prop3: 'value3'
                },
                hasKids: false,
                kids: []
              }]
            }]
          }]
        }]
      }]
    };
    expect(convertedData).toEqual(expected);
  });
});