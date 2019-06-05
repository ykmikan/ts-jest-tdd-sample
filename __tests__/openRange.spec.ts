import assert from 'power-assert';
import OpenRange from '../src/openRange';

describe('整数の閉区間作成 ', () => {
    const ME_START = 3;
    const ME_END = 8;

    let openRange: OpenRange;

    beforeEach(() => {
        openRange = new OpenRange({ start: ME_START, end: ME_END });
    });

    test('下端点と上端点を与えて閉区間が生成可能', () => {
        assert(openRange instanceof OpenRange);
    });

    test('下端点 >= 上端点の場合生成出不可能', () => {
      assert.throws( () => {
        new OpenRange({start: 8, end: 3})
      }, (err: Error) => {
        assert(err.message === 'start < endに違反しています')
        return true;
      })
    });

    test('閉区間から下端点を取得可能', () => {
        assert.equal(openRange.start, ME_START);
    });

    test('閉区間から上端点を取得可能', () => {
        assert.equal(openRange.end, ME_END);
    });

    test('閉区間から文字列表記を取得可能', () => {
        assert.equal(openRange.toString(), `[${ME_START}, ${ME_END}]`);
    });


});

