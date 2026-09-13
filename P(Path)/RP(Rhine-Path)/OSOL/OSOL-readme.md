# OSOL

## Computers Benchmark
### Resources
1. [OSOL Computers Benchmark](https://claude.ai/code/artifact/2c26e1db-0f02-418c-8e4a-6674a947324f)
2. [Geekbench 7](https://www.geekbench.com/)\
Geekbench account:\
username:hanyang\
email:howardyang2009@gmail.com\
password:yh19750624

###  MacOS
1. install Geekbench 7 from [Geekbench 7](https://www.geekbench.com/)

2. run CPU benchmark

3. run GPU benchmark

4. brew install fio (cmd)

5. sudo fio --name=r --ioengine=sync --direct=1 --rw=randread --bs=4k \
    --size=1g --numjobs=1 --iodepth=1 --runtime=30 --time_based \
    --group_reporting

6. find Serial number from `About this mac

7. add new computer in [OSOL Computers Benchmark](https://claude.ai/code/artifact/2c26e1db-0f02-418c-8e4a-6674a947324f) web records 

### Linix
1. download Geekbench 7 from [Geekbench 7](https://www.geekbench.com/)

2. ./geekbench7 (cmd)

3. ./geekbench7 --gpu-list

4. ./geekbench7 --gpu Vulkan

5. sudo apt update & sudo apt intall fio

6. lsblk -o NAME,SIZE,MODEL,SERIAL

7. fio --name=r --ioengine=io_uring --direct=1 --rw=randread --bs=4k --size=1g --numjobs=1 --iodepth=1 --runtime=30 --time_based --group_reporting --filename=/dev/sda

8. find Serial number

9. add new computer in [OSOL Computers Benchmark](https://claude.ai/code/artifact/2c26e1db-0f02-418c-8e4a-6674a947324f) web records 



