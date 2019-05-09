// eslint-disable-next-line no-unused-vars
import Vue from 'vue';
import Crypto from 'crypto-js';
import AES from 'crypto-js/aes';


export default {

/**
 * aes 加密
 * @param data 加密前数据
 * @return 加密后数据
 * */
  encrypts(data) {
    const aesSecret = '0102030405060708';
    const key = Crypto.enc.Utf8.parse(aesSecret);
    const iv = Crypto.enc.Utf8.parse(aesSecret);
    if (typeof (data) === 'object') {
      // eslint-disable-next-line no-param-reassign
      data = JSON.stringify(data);
    } else {
      // eslint-disable-next-line no-param-reassign
      data = `${data}`;
    }
    const ret = AES.encrypt(data, key, {
      iv,
      mode: Crypto.mode.CBC,
      padding: Crypto.pad.Pkcs7,
    });
    return Crypto.enc.Base64.stringify(ret.ciphertext);
  },

  /**
 * aes 解密
 * @param data 解密前数据
 * @return 解密后数据
 * */
  decrypta(data) {
    const aesSecret = '0102030405060708';
    const cipherTextHexStr = Crypto.enc.Utf8.parse(data);
    const cipherTextBase64Str = Crypto.enc.Utf8.stringify(cipherTextHexStr);
    const key = Crypto.enc.Utf8.parse(aesSecret);
    const iv = Crypto.enc.Utf8.parse(aesSecret);
    const oriStr = Crypto.AES.decrypt(cipherTextBase64Str, key, {
      iv,
      mode: Crypto.mode.CBC,
      padding: Crypto.pad.Pkcs7,
    });

    const decrypted = oriStr.toString(Crypto.enc.Utf8);
    let ret;
    try {
      ret = JSON.parse(decrypted);
    } catch (e) {
      ret = decrypted;
    }
    return ret;
  },
  /**
   * 转布尔值
   */
  // 转码

};
