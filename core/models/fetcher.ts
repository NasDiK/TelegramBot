export class Fetcher {
  private _requestBody: object | undefined;
  private _params: object | undefined;
  private _address: string | undefined;

  body = (body: object) => {
    this._requestBody = body;
    
    return this;
  }

  address = (address: string) => {
    this._address = address;
    
    return this;
  }

  executePost = () => {
    if (!this._address) {
      throw new Error('URL is undefined');
    }

    return fetch(this._address, {
      method: 'POST',
      body: JSON.stringify(this._requestBody),
      ...this._params
    })
  }

  executeGet = () => {
    if (!this._address) {
      throw new Error('URL is undefined');
    }

    return fetch(this._address, {
      method: 'GET',
      ...this._params
    })
  }
}