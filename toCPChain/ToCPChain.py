#!/usr/bin/env python3

# 便于使用node调用
import sys
from cpc_fusion import Web3


def test_local_sendRawTransaction1(userid,serAd):
    web3 = Web3(Web3.HTTPProvider('http://3.1.81.79:8501'))
    # 玩家的keyfile
    with open(r'D:\9102Hackthon\workstation\cpchain-windows-4.0-amd64\datadir\keystore'+ '\\'+ userid) as keyfile:
        encrypted_key = keyfile.read()
    private_key_for_senders_account = web3.cpc.account.decrypt(encrypted_key, '123456')
    from_addr = web3.toChecksumAddress('0x'+userid) ##玩家为发送者
    to_addr = web3.toChecksumAddress('0x'+serAd) ##游戏失败玩家需发送给CPC给服务器
    tx_dict = dict(
            type=0,
            nonce=web3.cpc.getTransactionCount(from_addr),
            gasPrice=web3.cpc.gasPrice,         #获得Gas Price
            gas=180000,
            to=to_addr,             #发送给服务器地址58d0791b5c4ddb460a89feda48a2ed935fb757ec
            value=300000000,        #失败则用户CPC减0.000003
            data=b'l',
            chainId=42,
        )
    signed_txn = web3.cpc.account.signTransaction(tx_dict,
                                    private_key_for_senders_account,
                                         )
    print(web3.cpc.sendRawTransaction(signed_txn.rawTransaction))


#成功时服务器给用户发信息
def test_local_sendRawTransaction2(userid,serAd):
    web3 = Web3(Web3.HTTPProvider('http://3.1.81.79:8501'))
    with open(r'D:\9102Hackthon\workstation\cpchain-windows-4.0-amd64\datadir\keystore'+ '\\'+ serAd) as keyfile:
        encrypted_key = keyfile.read()
    private_key_for_senders_account = web3.cpc.account.decrypt(encrypted_key, '123456')
    from_addr = web3.toChecksumAddress('0x'+serAd)      #服务器为发送者
    to_addr = web3.toChecksumAddress('0x'+userid)       #游戏胜利则服务器发送CPC给玩家
    tx_dict = dict(
            type=0,
            nonce=web3.cpc.getTransactionCount(from_addr),  
            gasPrice=web3.cpc.gasPrice,             #获得Gas Price
            gas=180000,
            to=to_addr,                         #发送给用户
            value=500000000,                    #成功则用户CPC加0.000005CPC
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
    with open(r'D:\9102Hackthon\workstation\cpchain-windows-4.0-amd64\datadir\keystore'+ '\\'+ userid) as keyfile:
        encrypted_key = keyfile.read()
    private_key_for_senders_account = web3.cpc.account.decrypt(encrypted_key, '123456')
    from_addr = web3.toChecksumAddress('0x'+userid) 
    # to_addr = web3.toChecksumAddress('0x'+serAd)  #异常是自己发给自己记录游戏异常
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
    userId = sys.argv[1]        #玩家地址
    serAd = sys.argv[2]         #服务器地址
    status = sys.argv[3]        #游戏胜负状态
    if status == '1':           #游戏胜利
        test_local_sendRawTransaction2(userId,serAd)
        print('1')
    # time.sleep(5)
    elif status == '0':         #游戏失败
        test_local_sendRawTransaction1(userId,serAd)
    # time.sleep(15)
        print('0')
    else:                       #游戏异常
        test_local_sendRawTransaction3(userId,serAd)
        print('other')
    print('end-----------------')
