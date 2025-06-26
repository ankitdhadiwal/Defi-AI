import * as anchor from '@coral-xyz/anchor';
import { Program } from '@coral-xyz/anchor';
import { Keypair } from '@solana/web3.js';
import { Voting } from '../target/types/voting';
import { startAnchor } from "solana-bankrun";
import { BankrunProvider } from "anchor-bankrun";

const IDL = require('../target/idl/voting.json');

describe('Voting', () => {

  it('Initialize Poll', async () => {
    const context = await startAnchor("anchor", [], []);
    const provider = new BankrunProvider(context);


  });
});
