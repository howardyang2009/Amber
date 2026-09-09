https://claude.ai/code/artifact/2c26e1db-0f02-418c-8e4a-6674a947324f

on mac
sudo fio --name=r --ioengine=sync --direct=1 --rw=randread --bs=4k \
    --size=1g --numjobs=1 --iodepth=1 --runtime=30 --time_based \
    --group_reporting

on debian
lsblk -o NAME,SIZE,MODEL,SERIAL

fio --name=r --ioengine=io_uring --direct=1 --rw=randread --bs=4k --size=1g --numjobs=1 --iodepth=1 --runtime=30 --time_based --group_reporting --filename=/dev/sda

./geekbench7 --gpu-list

./geekbench7 --gpu Vulkan

https://browser.geekbench.com/v7/cpu/299625