import { OtherStringUtils, calculateComplexity, toUpperCaseWithCb } from "../../app/doubles/OtherUtils"

describe('OtherUtils test suite', () =>{
  describe('OtherStringUtils tests with spies', () =>{
    let sut: OtherStringUtils;

    beforeEach(()=>{
      sut = new OtherStringUtils();
    })

    it('use a spy to track calls', ()=>{
      const toUpperCaseSpy = jest.spyOn(sut, 'toUpperCase');
      sut.toUpperCase('asa')
      expect(toUpperCaseSpy).toHaveBeenCalledWith('asa');
    })

    it('use a spy to track calls to other module', ()=>{
      const consoleLogSpy = jest.spyOn(console, 'log');
      sut.logString('abc')
      expect(consoleLogSpy).toHaveBeenCalledWith('abc');
    })

    it('use a spy to replace the implementation of a method', ()=>{
      jest.spyOn(sut, 'callExternalService').mockImplementation(()=>{
        console.log('mocked implementation');
      });
      sut.callExternalService();
    })
  })

  describe('Tracking callbacks with Jest mocks', ()=>{
    const callbackMock = jest.fn();

    afterEach(()=>{
      jest.clearAllMocks()
    })

    it('calls callback for invalid arg - track calls', () => {
      const actual = toUpperCaseWithCb('', callbackMock);
      expect(actual).toBeUndefined();
      expect(callbackMock).toHaveBeenCalledWith('no arg provided');
      expect(callbackMock).toHaveBeenCalledTimes(1);
    })

    it('calls callback for valid arg - track calls', () => {
      const actual = toUpperCaseWithCb('abc', callbackMock);
      expect(actual).toBe('ABC');
      expect(callbackMock).toHaveBeenCalledWith('called function with abc')
      expect(callbackMock).toHaveBeenCalledTimes(1);
    })
  })
  describe('Tracking callbacks', ()=>{
    let cbArgs = [];
    let timesCalled = 0;

    function callbackMock(arg:string){
      cbArgs.push(arg);
      timesCalled++;
    }

    afterEach(()=>{
      // clearing tracking fields
      cbArgs = [];
      timesCalled = 0;
    })

    it('calls callback for invalid arg - track calls', () => {
      const actual = toUpperCaseWithCb('', callbackMock);
      expect(actual).toBeUndefined();
      expect(cbArgs).toContain('no arg provided');
      expect(timesCalled).toBe(1);
    })

    it('calls callback for valid arg - track calls', () => {
      const actual = toUpperCaseWithCb('abc', callbackMock);
      expect(actual).toBe('ABC');
      expect(cbArgs).toContain('called function with abc');
      expect(timesCalled).toBe(1);
    })
  })

  it('ToUpperCase - calls callback for invalid arg', () => {
    const actual = toUpperCaseWithCb('', ()=>{});
    expect(actual).toBeUndefined();
  })

  it('ToUpperCase - calls callback for valid arg', () => {
    const actual = toUpperCaseWithCb('abc', ()=>{});
    expect(actual).toBe('ABC');
  })

  it('calculates complexity', ()=>{
    const someInfo  = {
      length: 5,
      extraInfo: {
        field1: 'someInfo',
        field2: 'someOtherInfo'
      }
    }

    const actual = calculateComplexity(someInfo as any)
    expect(actual).toBe(10)
  })
})
