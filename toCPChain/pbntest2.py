#!/usr/bin/env python3

import sys
from cpc_fusion import Web3
import time


def test_local_sendRawTransaction1(userid,serAd):
    web3 = Web3(Web3.HTTPProvider('http://3.1.81.79:8501'))
    with open(r'D:\9102Hackthon\cpchain-windows-4.0-amd64\datadir\keystore'+ '\\'+ userid) as keyfile:
        encrypted_key = keyfile.read()
    private_key_for_senders_account = web3.cpc.account.decrypt(encrypted_key, '123456')
    from_addr = web3.toChecksumAddress('0x'+userid)
    to_addr = web3.toChecksumAddress('0x'+serAd)
    tx_dict = dict(
            type=0,
            nonce=web3.cpc.getTransactionCount(from_addr),
            gasPrice=web3.cpc.gasPrice,
            gas=180000,
            to=to_addr,
            value=300000000,
            data=b'w',
            chainId=42,
        )
    signed_txn = web3.cpc.account.signTransaction(tx_dict,
                                    private_key_for_senders_account,
                                         )
    print(web3.cpc.sendRawTransaction(signed_txn.rawTransaction))


#成功时服务器给用户发信息
def test_local_sendRawTransaction2(userid,serAd):
    web3 = Web3(Web3.HTTPProvider('http://3.1.81.79:8501'))
    with open(r'D:\9102Hackthon\cpchain-windows-4.0-amd64\datadir\keystore'+ '\\'+ serAd) as keyfile:
        encrypted_key = keyfile.read()
    private_key_for_senders_account = web3.cpc.account.decrypt(encrypted_key, '123456')
    from_addr = web3.toChecksumAddress('0x'+serAd)
    to_addr = web3.toChecksumAddress('0x'+userid)
    tx_dict = dict(
            type=0,
            nonce=web3.cpc.getTransactionCount(from_addr),
            gasPrice=web3.cpc.gasPrice,
            gas=180000,
            to=to_addr,
            value=500000000,
            data=b'w',
            chainId=42,
        )
    signed_txn = web3.cpc.account.signTransaction(tx_dict,
                                    private_key_for_senders_account,
                                         )
    print(web3.cpc.sendRawTransaction(signed_txn.rawTransaction))


#异常时自己给自己发送消息
def test_local_sendRawTransaction3(userid,serAd):
    web3 = Web3(Web3.HTTPProvider('http://3.1.81.79:8501'))
    with open(r'D:\9102Hackthon\cpchain-windows-4.0-amd64\datadir\keystore'+ '\\'+ userid) as keyfile:
        encrypted_key = keyfile.read()
    private_key_for_senders_account = web3.cpc.account.decrypt(encrypted_key, '123456')
    from_addr = web3.toChecksumAddress('0x'+userid)
    to_addr = web3.toChecksumAddress('0x'+serAd)
    tx_dict = dict(
            type=0,
            nonce=web3.cpc.getTransactionCount(from_addr),
            gasPrice=web3.cpc.gasPrice,
            gas=90000,
            to=from_addr,
            value=0,
            data=b'',
            chainId=42,
        )
    signed_txn = web3.cpc.account.signTransaction(tx_dict,
                                    private_key_for_senders_account,
                                         )
    print(web3.cpc.sendRawTransaction(signed_txn.rawTransaction))

if __name__=='__main__':
    userId = sys.argv[1]
    serAd = sys.argv[2]
    status = sys.argv[3]
    if status == '1':
        test_local_sendRawTransaction2(userId,serAd)
        print('1')
    # time.sleep(5)
    elif status == '0':
        test_local_sendRawTransaction1(userId,serAd)
    # time.sleep(15)
        print('0')
    else:
        test_local_sendRawTransaction3(userId,serAd)
        print('other')
    print('end-----------------')
