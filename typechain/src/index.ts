import crypto from "crypto";
//import * as crypto from "crypto"
//위 방식을 사용하려면 tsconfig에 esModuleInterop : true
interface BlockShape {
  hash: string;
  prevHash: string;
  height: number;
  data: string;
}

class Block implements BlockShape {
  public hash: string;
  constructor(public prevHash: string, public height: number, public data: string) {
    this.hash = Block.calculateHash(prevHash, height, data);
  }
  static calculateHash(prevHash: string, height: number, data: string) {
    const toHash = `${prevHash}${height}${data}`;
    return crypto.createHash("sha256").update(toHash).digest("hex");
  }
}

class Blockchain {
  private blocks: Block[];
  constructor() {
    this.blocks = [];
  }
  private getPreviousHash() {
    if (this.blocks.length === 0) {
      return "";
    } else {
      return this.blocks[this.blocks.length - 1].hash;
    }
  }
  public addBlock(data: string) {
    const newBlock = new Block(this.getPreviousHash(), this.blocks.length + 1, data);
    this.blocks.push(newBlock);
  }
  public getBlocks() {
    return [...this.blocks];
  }
}
const blockchain = new Blockchain();
blockchain.addBlock("First one");
blockchain.addBlock("Second one");

blockchain.addBlock("third one");

console.log(blockchain.getBlocks());
